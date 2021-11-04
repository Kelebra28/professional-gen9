import axios from "axios"

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const fetchUserToken = async (token) => {
    const response = await axios.get(`${BASE_URL}/user`, {
      headers: {
        // Authorization: `JWT ${token}`,
        Authorization: `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODMzOTNlMjI5NWVmMDAxNzJjYTc0NyIsInJvbGUiOiJDVVNUT01FUiIsImV4cCI6MTYzNjA3NjI1OSwiaWF0IjoxNjM1OTg5ODU5fQ.upXrYaoPOnYoW7AcQco-ZLOE33sWNV_wT44d_A1FjkI`,
        'Content-Type': 'application/json',
      },
    })
    console.log(response.data)
    return response
  }

  export  {
      fetchUserToken
  }