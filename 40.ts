function makeAlbum(artist: string, title: string, tracks?: number): object {
    const album = {
      artist: artist,
      title: title,
    };
  
    if (tracks !== undefined) {
        album['tracks'] = tracks;
        }
  
    return album;
  }
  

  const album1 = makeAlbum("Atif Aslam", "Tajdar-e-Haram ");
  const album2 = makeAlbum("Ali Zafar", "Balaghal-Ula Bi-Kamaalihi ", 12); 
  const album3 = makeAlbum("Maher Zain", "Rahmatun Lil'Alameen");
  

  console.log(album1);
  console.log(album2);
  console.log(album3);
  