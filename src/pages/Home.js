import React from "react";
import {useParams} from "react-router-dom"
import "../assets/styles/Home.style.scss"
import SearchInput from "../components/SearchInput";
import Todo from "../components/Todo";

export default function Home() {
  let {param} = useParams() // Вытаскиваем params c URL
  return (
    <div className="row home">
      <div className="col-12">
        <SearchInput />
      </div>
      <div className="col-12">
        <Todo />
      </div>
    </div>
  )
}