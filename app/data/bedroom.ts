import { Ibedroom } from "../bedroom"

const api_url = "http://127.0.0.1:5000"

export async function getBedrooms() {
    return fetch(api_url + '/bedrooms')
      .then(response => response.json())
      .then((json: Ibedroom[]) => { return json })
  }
  