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
            <Container>
                <img src={regular} alt={alt_description} />
                <UserWrapper>
                    <UserInfoWrapper>
                        <h4 style={{marginBottom:'0.5rem'}} >{name}</h4>
                        <p style={{marginBottom:'0'}} >{likes}</p>
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
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;
    height: 17.5rem;
    

    img {
        display: flex;
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        cursor: pointer;
        border-radius: 16px;
    }
`
const UserWrapper = styled.div`
    position: absolute;
    width: 100%;
    padding: 1rem;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    transform: translateY(100%);
    transition: all 0.3s linear;
    display: flex;
    justify-content: space-between;
    align-items: center;

    :hover {
        transform: translateY(0);
    }

    a{
        text-decoration: none;
        font-weight: 700;
    }
`

const UserInfoWrapper = styled.div`
`