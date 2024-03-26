import { GetStaticProps } from "next";

interface PersonProps {
  person: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  };
}

export default function Person(props: PersonProps) {
  return (
    <div>
      <h1>{props.person.name}</h1>
      <p>키: {props.person.height}</p>
      <p>몸무게: {props.person.mass}</p>
      <p>머리 색깔: {props.person.hair_color}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://swapi.dev/api/people/5`);
  const person = await res.json();
  return {
    props: {
      person,
    },
  };
};
