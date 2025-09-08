import { getAuth } from "@clerk/tanstack-react-start/server"
import { getWebRequest } from "@tanstack/react-start/server"
import { createServerFn } from "@tanstack/react-start"

export const getClerkAuth = createServerFn({ method: "GET" }).handler(
  async () => {
    const request = getWebRequest()
    if (!request) {
      throw new Error("No request found")
    }

    try {
      const auth = await getAuth(request)
      const token = await auth.getToken({ template: "convex" })

      return {
        userId: auth.userId,
        token,
      }
    } catch {
      throw new Error("Opps, something happen when get the auth account")
    }
  },
)
