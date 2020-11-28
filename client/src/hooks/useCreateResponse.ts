import axios from "axios"
import { http } from "../http"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"

const useCreateResponse = () => {
  const {
    auth: { user, token },
  } = useSelector((state: RootStore) => state)

  const createResponse = async (
    hrComplex: string,
    respose: string,
    responseId?: string
  ) => {
    const res = await axios({
      url: `${http}/response/create`,
      method: "post",
      data: {
        hrComplex,
        content: respose,
        response: responseId ? responseId : null,
      },
      headers: token && {
        Authorization: `Basic ${token}`,
      },
    })

    const owner = {
      _id: user._id,
      ava: user.ava,
      role: user.role,
      username: user.username,
    }

    return { ...res.data, owner }
  }
  return { createResponse }
}

export default useCreateResponse
