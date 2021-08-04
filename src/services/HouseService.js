import { AppState } from "../AppState"
import { sandbox } from "./AxiosService"

class HouseService {

  async getHouses() {
    let res = await sandbox.get("/houses")
    console.log(res.data)
    AppState.houses = res.data
  }

}

export const houseService = new HouseService