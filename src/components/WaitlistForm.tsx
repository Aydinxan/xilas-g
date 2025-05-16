
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Təşəkkür edirik!",
        description: "Gözləmə siyahısına əlavə olundunuz. Sizə tezliklə məlumat verəcəyik.",
        duration: 5000,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="E-poçt ünvanınız"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow px-4 py-3 rounded-md border border-xilas-secondary/30 bg-white focus:border-xilas-primary focus:ring-1 focus:ring-xilas-primary"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-xilas-primary hover:bg-xilas-primary/90 text-white py-3 px-6 rounded-md transition-all"
        >
          {isSubmitting ? "Göndərilir..." : "Gözləmə siyahısına qoşul"}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;
