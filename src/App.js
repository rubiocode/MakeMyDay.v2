import React, { useState, useEffect, useRef } from 'react';

//Material UI components
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

//styled components import
import styled from 'styled-components';

//Local Files
import ImageCard from './components/ImageCard';
import Header from './components/Header';

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

  //default page is 1 in unsplash, but now we can change the pages as we fetch images 
  const [page, setPage] = useState(1);

  //setting up searched images query from search bar
  const [query, setQuery] = useState('');

  //new images from lazy loading
  const [newImages, setNewImages] = useState(false);

  const mounted = useRef(false);

  //creating function to fetch images
  const fetchImages = async () => {

    setLoading(true)
    //using let to store url because it will be changing whether default grid or search image
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    //I want to use url if there is nothing in query but if there is something then we want what is being queried
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }


    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);

      //we have already preloaded fetched images when app starts, 
      //we want the new images plus the old images to be added to the array with the spread operator
      setImages((prevImages) => {
        //if typing brand new query then wipe out old image results (no appending instead wiping out)
        if (query && page === 1) {
          return data.results;

          //if query result unsplash api response sits in a diff array 
        //called results so need to get first response (data) plus 2nd response(results)
        } else if (query) {
          return [...prevImages, ...data.results];
        } else {
          return [...prevImages, ...data];
        }
      });

      setNewImages(false);
      setLoading(false);
    } catch (e) {
      //setting loading to false even if there is an error
      setNewImages(false)
      setLoading(false);
      console.log(e);
    }
  };

  //
  useEffect(() => {
    //running when the app loads
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      //to run after the initial render
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((prevPage) => {
      return prevPage + 1;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newImages]);

  //manually setting up lazy loading
  const event = () => {
    //scroll in the browser for these logs to appear
    // console.log(`innerHeight ${window.innerHeight}`);
    // console.log(`scrollY ${window.scrollY}`);
    // console.log(`body height ${document.body.scrollHeight}`);

    //the higher the number the sooner the fetching of the images
    if (
      //bottom of the page as i'm scrolling we change state to true
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      // console.log('WORKING');
      setNewImages(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Is Working');

    //if empty input cannot fetch images
    if (!query) return;

    //since state page is default 1 we want to instruct to fetch images
    if (page === 1) {
      fetchImages();
    }

    //set page to 1 so images do not get appended to old results upon new search
    setPage(1);
  }
  return (
    <MainWrapper>
      <Header />
      <Wrapper>
        <SearchWrapper>
          <SearchBarWrapper>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <form>
              <input 
              type='text' 
              placeholder='Search Image' 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              />
              <button type='submit' onClick={handleSubmit}></button>
            </form>
          </SearchBarWrapper>
        </SearchWrapper>
      </Wrapper>
      <ImageWrapper>
        <ImageGridWrapper>
          {images.map((image, index) => {
            /*console.log(image);*/
            return <ImageCard key={index} {...image} />
          })}
        </ImageGridWrapper>
        {/*Setting up lazy loading */}
        {loading && <h2 style={{ textAlign: 'center', padding: '3rem' }}>Loading...</h2>}
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
    background-color: #D3D0C9;
    color: black;
`

const SearchWrapper = styled.div`
    flex: 1; /*takes up all the space it gets so it will stretch with screen sizing */
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 50%;
    margin: 0 auto;
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
    display: flex;
    height: 100%;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
  `

const ImageGridWrapper = styled.div`
  background-color: #D3D0C9;
  column-count: 4;
  column-gap: 5px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 1800px

`