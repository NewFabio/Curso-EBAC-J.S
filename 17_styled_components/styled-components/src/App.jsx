import styled from 'styled-components';
import ProfileCard from './ProfileCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const App = () => {
  return (
    <Container>
      <ProfileCard 
        image = "https://placehold.co/600x400/png"
        name = "John Doe"
        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lectus et lectus bibendum ultricies."
      />
    </Container>
  );
}

export default App;