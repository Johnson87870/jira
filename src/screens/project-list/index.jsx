import React from 'react'
import { useEffect, useState } from "react";
import { clearObject } from 'utils';
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import * as qs  from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreens =  () => {

    const [users,setUsers] = useState([])
    const [param, setParam] = useState({
    name:'',
    personId:''
  })
 
    const [list,setList] = useState([])

    useEffect(()=>{
      fetch(`${apiUrl}/projects?${qs.stringify(clearObject(param))}`).then(async response => {
        if (response.ok) {
          console.log(response);
          setList(await  response.json())
        }
      })
    },[param])

    useEffect(()=>{
      fetch(`${apiUrl}/users`).then(async response => {
        if(response.ok){
            console.log(response);
          setUsers(await response.json())
        }
      })
    },[])

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List list={list} users={users}/>
    </div>
}