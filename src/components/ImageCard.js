//styled components import
import styled from 'styled-components';

const ImageCard = ({
    //Deconstructing from unsplash response
    urls:{regular}, 
    alt_description,
    likes,
    user: {
        name,
        portfolio_url,
        profile_image: { medium },
    },
}) => {
    return (
        <Wrapper>
            <Container className='image'>
                <img src={regular} alt={alt_description} />
                <UserWrapper className='user-info'>
                    <UserInfoWrapper>
                        <h4 style={{marginBottom:'0.5rem'}} >{name}</h4>
                        <p style={{marginBottom:'0'}} >{likes} likes</p>
                    </UserInfoWrapper>
                    <a href={portfolio_url}>
                        <img src={medium} alt={name} style={{width:'2.5rem', height:'2.5rem', borderRadius:'50%'}} />
                    </a>
                </UserWrapper>
            </Container>
        </Wrapper>
    )
}

export default ImageCard


//Styled components
const Wrapper = styled.div`
    display: inline-flex;
    padding: 10px;
`

const Container = styled.div`
    ${'' /* display: flex;
    align-items: center; */}
    ${'' /* box-sizing: border-box; */}
    width: 236px;
    height: 17.5rem;
    position: relative;
    overflow: hidden;

    img {
        display: flex;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        cursor: pointer;
        border-radius: 16px;
    }
}
`
const UserWrapper = styled.div`
    a{
        text-decoration: none;
        font-weight: 700;
    }
`

const UserInfoWrapper = styled.div`

`