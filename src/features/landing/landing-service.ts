import { waitlistClient } from "@shared/libs/connections";
import { createServerFn } from "@tanstack/react-start";
import z from "zod";

export const joinWaitlist = createServerFn()
  .inputValidator(
    z.object({
      email: z.email(),
    })
  )
  .handler(async ({ data: { email } }) => {
    await waitlistClient.post("/api/v1/signup", {
      email,
      waitlist_id: "31684",
    });
  });
