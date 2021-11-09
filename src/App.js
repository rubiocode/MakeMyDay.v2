import React, { useState, useEffect, useRef } from 'react';

//Material UI components
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

//styled components import
import styled from 'styled-components';

//Local Files
import ImageCard from './components/ImageCard';
import './App.css';

//after adding the process.env variable the terminal must be restarted for it to work!
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  //since we fetching data we need to set loading
  const [loading, setLoading] = useState(false);

  //setting up images
  const [images, setImages] = useState([]);

  //creating function to fetch images
  const fetchImages = async () => {

    setLoading(true)
    //using let to store url because it will be changing whether default grid or search image
    let url;
    url = `${mainUrl}${clientID}`
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setImages(data);
      setLoading(false);
    } catch (e) {
      //setting loading to false even if there is an error
      setLoading(false);
      console.log(e);
    }
  }

  //
  useEffect(() => {
    //running when the app loads
    fetchImages()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Is Working');
  }
  return (
    <MainWrapper>
      <Wrapper>
        <SearchWrapper>
          <SearchBarWrapper>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <form>
              <input type='text' placeholder='Search images' />
              <button type='submit' onClick={handleSubmit}></button>
            </form>
          </SearchBarWrapper>
        </SearchWrapper>
      </Wrapper>
      <ImageWrapper>
        <ImageGridWrapper>
          {images.map((image, index) => {
            /*console.log(image);*/
            return <ImageCard key={image.id} {...image} />
          })}
        </ImageGridWrapper>
        {/*Setting up lazy loading */}
        {loading && <h2 style={{textAlign:'center', padding:'3rem'}}>Loading...</h2>}
      </ImageWrapper>
    </MainWrapper>
  );
}

export default App;

//Style CSS 
const MainWrapper = styled.div`

`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;
`

const SearchWrapper = styled.div`
    flex: 1; /*takes up all the space it gets so it will stretch with screen sizing */
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

/* When user types the textfield will not show any outline */
    input:focus {
        outline: none;
    }
`

const ImageWrapper = styled.div`
  background-color: white;
    display: flex;
    height: 100%;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
  `

const ImageGridWrapper = styled.div`
  background-color: white;
  column-count: 4;
  column-gap: 5px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 1800px

`