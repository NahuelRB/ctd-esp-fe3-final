import { useEffect, useState, useReducer } from "react"
import axios from 'axios'

const baseUrl = `https://jsonplaceholder.typicode.com/users`
const endPoint = 'posts';

const usePosts = () => {


    return{
        getPosts
    }
}