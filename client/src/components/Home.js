import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters } from "../action";
import Card from "./Card";
import Navbar from "./Navbar";

export default function Home() {
  const dispatch = useDispatch();
  const allcharacters = useSelector((state) => state.characters);
  console.log(allcharacters);
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCharacters());
  }
  return (
    <div>
      <Navbar handleClick={handleClick} />
      {allcharacters?.map((el) => {
        return (
          <fragment>
            <Link to={"/home/" + el.id}>
              <Card
                name={el.name}
                img={el.img}
                nickname={el.nickname}
                key={el.id}
              />
            </Link>
          </fragment>
        );
      })}
    </div>
  );
}
