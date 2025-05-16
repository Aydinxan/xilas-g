
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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8 relative">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-xl -z-10 transform scale-105 blur-md"></div>
      <div className="flex flex-col sm:flex-row gap-3 bg-white/50 backdrop-blur-sm p-2 rounded-xl shadow-lg">
        <Input
          type="email"
          placeholder="E-poçt ünvanınız"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow px-4 py-3 rounded-lg border-none bg-white/70 focus:ring-1 focus:ring-xilas-primary shadow-inner"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-xilas-primary hover:bg-xilas-primary/90 text-white py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Göndərilir...
            </>
          ) : "Gözləmə siyahısına qoşul"}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;
