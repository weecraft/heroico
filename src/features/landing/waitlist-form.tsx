import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from "@shared/components";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { joinWaitlist } from "./landing-service";

const formSchema = z.object({
  email: z.email("Opps, your email looks, weird"),
});

export function WaitlistForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const joinWaitlistMutation = useMutation({
    mutationFn: useServerFn(joinWaitlist),
    onSuccess: () => {
      form.reset();
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    joinWaitlistMutation.mutate({ data: { email: values.email } });
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full tablet:flex-row flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Join waitlist</Button>
      </form>
    </Form>
  );
}
