import { GetServerSideProps } from "next";

interface PersonProps {
  person: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
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

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://swapi.dev/api/people/4`);
  const person = await res.json();
  return {
    props: {
      person,
    },
  };
};
