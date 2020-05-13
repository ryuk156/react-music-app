import React from "react";

const Artist = ({ artist }) => {
  if (!artist) return null;
  const { images, name, followers, genres } = artist;
  return (
    <div className="container">
      <div className="container my-3">
        <h3>{name}</h3>
        <div className="container ">
          <b>{followers.total} Followers</b>
        </div>
        <br />
        <img
          src={images[0] && images[0].url}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            objectFit: "cover",
          }}
          alt="artist-profile"
        />
      </div>
    </div>
  );
};

export default Artist;
