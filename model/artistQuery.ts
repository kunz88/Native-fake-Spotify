type ArtistsResult = {
    artists:{
        href: string;
        items: ArtistItem[];
    }

  };
  
  export type ArtistItem = {
    external_urls: { spotify: string };
    followers: { href: null; total: number };
    genres: string[];
    href: string;
    id: string;
    images: ArtistImage[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  };
  
  export type ArtistImage = {
    height: number;
    url: string;
    width: number;
  };

  export default ArtistsResult