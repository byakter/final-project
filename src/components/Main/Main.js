// import { useState } from 'react';
// import { getAlbums, getToken } from '../../utils/SpotifyWebAPI'
// import './Main.css';
// import Card from '../Card/Card';
// import Button from '../../blocks/Button';
// import Input from '../../blocks/Input';

// const Main = () => {
//   const [albums, setAlbums] = useState([])
//   const [search, setSearch] = useState('')
//   const [buttonClicked, setButtonClicked] = useState(false);

//   const artistSearch = () => {
//     getToken().then(() => {
//       getAlbums(search).then(albumsList => {
//         console.log(albumsList)
//         setAlbums(albumsList);
//         setButtonClicked(true);
//       })
//     })

//   };
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       artistSearch();
//     }
//   };



//   return (
//     <div className="main">

//       {!buttonClicked && (

//         <div>
//           <Input className='main-input' value={search} onChange={(e) => {
//             setSearch(e.target.value)
//           }} />
//           <Button value={'Search'} onClick={artistSearch} />
//         </div>

//       )}
//       {
//         albums.map(album => <Card key={album.id} album={album} />
//         )

//       }
//     </div>
//   )
// }

// export default Main;
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getAlbums, getToken } from '../../utils/SpotifyWebAPI'
import './Main.css';
import Card from '../Card/Card';
import Button from '../../blocks/Button';
import Input from '../../blocks/Input';
import Context from '../context';


const Main = () => {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');

  const nav = useNavigate();
  const ctx = useContext(Context);

  useEffect(() => {
    if (!ctx.isSignIn) {
      nav('/signin')
    }
  }, [ctx.isSignIn, nav]);

  useEffect(() => {
    if (!ctx.showSearch) {
      setAlbums([])
    }
  }, [ctx.showSearch])

  const artistSearch = () => {
    getToken().then(() => {
      getAlbums(search).then(albumsList => {
        console.log(albumsList);
        setAlbums(albumsList);
        ctx.setShowSearch(true);
      });
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      artistSearch();
    }
  };

  return (
    <div className="main">
      {!ctx.showSearch && (
        <div>
          <Input
            className='main-input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button value={'Search'} onClick={artistSearch} />
        </div>
      )}
      {albums.map(album => (
        <Card key={album.id} album={album} />
      ))}
    </div>
  );
};

export default Main;
