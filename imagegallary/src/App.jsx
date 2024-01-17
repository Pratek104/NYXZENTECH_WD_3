
import { useEffect, useState } from 'react';
import './App.css';
import { SRLWrapper } from 'simple-react-lightbox';
const images = [
  { id: '1', imageName: 'images1.jpg', tag: 'free' },
  { id: '2', imageName: 'images2.jpg', tag: 'free' },
  { id: '3', imageName: 'images3.jpg', tag: 'pro' },
  { id: '4', imageName: 'images4.jpg', tag: 'pro' },
  { id: '5', imageName: 'images5.jpg', tag: 'free' },
  { id: '6', imageName: 'images6.jpg', tag: 'pro' },
  { id: '7', imageName: 'images7.jpg', tag: 'free' },
  { id: '8', imageName: 'images8.jpg', tag: 'pro' },
  { id: '9', imageName: 'images9.jpg', tag: 'free' },
  { id: '10', imageName: 'images10.jpg', tag: 'pro' },
  { id: '11', imageName: 'images11.jpg', tag: 'free' },
  { id: '12', imageName: 'images12.jpg', tag: 'free' },
  { id: '13', imageName: 'images13.jpg', tag: 'free' },
  { id: '14', imageName: 'images14.jpg', tag: 'pro' },
  { id: '15', imageName: 'images15.jpg', tag: 'free' },
  { id: '16', imageName: 'images16.jpg', tag: 'pro' },
  { id: '17', imageName: 'images17.jpg', tag: 'free' },
  { id: '18', imageName: 'images18.jpg', tag: 'pro' },
  { id: '19', imageName: 'images19.jpg', tag: 'free' },
  { id: '20', imageName: 'images20.jpg', tag: 'pro' },
];

// ...

function App() {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App">
      <div className='tags'>

        <TagButton name="all" handleSetTag={setTag} tagActive={tag === "all" ? true : false} />
        <TagButton name="free" handleSetTag={setTag} tagActive={tag === "free" ? true : false} />
        <TagButton name="pro" handleSetTag={setTag} tagActive={tag === "pro" ? true : false} />
      </div>
      <SRLWrapper>

        <div className='container'>

          {filteredImages.map((image) => (
            <div key={image.id} className='image-card'>
              <a href={`/images/${image.imageName}`}>
              <img className='image' src={`/images/${image.imageName}`} alt="" />
            </a>
        </div>
))}
    </div>
</SRLWrapper>

    </div >
  );
}

const TagButton = ({ name, handleSetTag }) => {
  return <button className='tag' onClick={() => handleSetTag(name)}>{name.toUpperCase()}</button>;
};

export default App;

