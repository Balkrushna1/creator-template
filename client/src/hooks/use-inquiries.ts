import { useMutation } from "@tanstack/react-query";
import { type InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Simulate a brief delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      return data;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll contact you soon!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
}
