import { Response } from "../models"

export const create_response = async (req: any, res: any) => {
  try {
    const { userId } = req
    const { hrComplex, content, response: responseId } = req.body

    const response = new Response({
      hrComplex,
      owner: userId,
      content,
      date: new Date(),
      response: responseId,
    })
    const newResponse = await response.save()

    res.status(201).json({ response: newResponse })
  } catch (error) {
    res.status(400).json(`Creating response error: ${error.message}`)
  }
}
