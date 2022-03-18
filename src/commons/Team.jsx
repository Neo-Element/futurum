import React from "react";

import marisol from "../assets/marisol.png" 

import mateo from "../assets/mateo.jpeg";


const Team = () => {
  return (
    <div className="grid">
      <div className="singleCard">
      <div className="bodyCard">
        <div className="half">
          <div className="text">
            <h3>MARISOL</h3>
            <hr></hr>
          </div>
          <div class="image">
            <img
              src={marisol}
              alt="perfil"
            />
          </div>
        </div>
        <div className="half">
          <div className="description">
            <h3>Perfil</h3>
            <p>me gusta el back, hago tablas</p>
          </div>
        </div>
      </div>
    </div>
    <div className="singleCard">
      <div className="bodyCard">
        <div className="half">
          <div className="text">
            <h3>VIRGINIA</h3>
            <hr></hr>
          </div>
          <div class="image">
            <img
              src=""
              alt="perfil"
            />
          </div>
        </div>
        <div className="half">
          <div className="description">
            <h3>Perfil</h3>
            <p>Algo que quieran poner</p>
          </div>
        </div>
      </div>
    </div>
    <div className="singleCard">
      <div className="bodyCard">
        <div className="half">
          <div className="text">
            <h3>DELFINA</h3>
            <hr></hr>
          </div>
          <div class="image">
            <img
              src=""
              alt="perfil"
            />
          </div>
        </div>
        <div className="half">
          <div className="description">
            <h3>Perfil</h3>
            <p>Algo que quieran poner</p>
          </div>
        </div>
      </div>
    </div>
    <div className="singleCard">
      <div className="bodyCard">
        <div className="half">
          <div className="text">
            <h3>TOMAS</h3>
            <hr></hr>
          </div>
          <div class="image">
            <img
              src=""
              alt="perfil"
            />
          </div>
        </div>
        <div className="half">
          <div className="description">
            <h3>Perfil</h3>
            <p>Algo que quieran poner</p>
          </div>
        </div>
      </div>
    </div>
    <div className="singleCard">
      <div className="bodyCard">
        <div className="half">
          <div className="text">
            <h3>ALEXIS</h3>
            <hr></hr>
          </div>
          <div class="image">
            <img
              src=""
              alt="perfil"
            />
          </div>
        </div>
        <div className="half">
          <div className="description">
            <h3>Perfil</h3>
            <p>Algo que quieran poner</p>
          </div>
        </div>
      </div>
    </div>
    <div className="singleCard">
      <div className="bodyCard">
        <div className="half">
          <div className="text">
            <h3>MATEO</h3>
            <hr></hr>
          </div>
          <div class="image">
            <img
              src={mateo}
              alt="perfil"
            />
          </div>
        </div>
        <div className="half">
          <div className="description">
            <h3>Perfil</h3>
            <p>En los merge disfruta cuando aparecen los conflictos</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Team;
