import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from '@/hooks/useActor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  deliveryLocation: string;
  message: string;
  permissionGranted: boolean;
}

export default function ContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      permissionGranted: false,
    },
  });

  const permissionGranted = watch('permissionGranted');

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      if (!actor) throw new Error('Backend not initialized');
      await actor.submitForm(
        data.name,
        data.email,
        data.phone,
        data.pickupLocation,
        data.deliveryLocation,
        data.message,
        data.permissionGranted
      );
    },
    onSuccess: () => {
      setShowSuccess(true);
      reset();
      toast.success('Quote request submitted successfully!', {
        description: 'We will contact you shortly to discuss your transportation needs.',
      });
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
      
      // Hide success message after 10 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    },
    onError: (error: Error) => {
      toast.error('Failed to submit quote request', {
        description: error.message || 'Please try again later.',
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Contact & Quote Request
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for a free quote or to learn more about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Contact us directly or fill out the form to request a quote
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        1100 NJ-34<br />
                        Aberdeen Township, NJ 07747
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a
                        href="tel:2018380000"
                        className="text-primary hover:underline"
                      >
                        201.838.0000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">
                        Contact us for email inquiries
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-white">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                    <p className="text-sm text-white/80 mt-4">
                      We operate around the clock to serve your transportation needs
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Request Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Thank you for your quote request!
                    </h3>
                    <p className="text-green-700 text-sm">
                      We have received your information and will contact you shortly to discuss your transportation needs.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Your full name"
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      placeholder="your.email@example.com"
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">
                      Phone <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone', { required: 'Phone is required' })}
                      placeholder="(555) 123-4567"
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="pickupLocation">
                      Pickup Location <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="pickupLocation"
                      {...register('pickupLocation', {
                        required: 'Pickup location is required',
                      })}
                      placeholder="City, State or ZIP"
                      className={errors.pickupLocation ? 'border-destructive' : ''}
                    />
                    {errors.pickupLocation && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.pickupLocation.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="deliveryLocation">
                      Delivery Location <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="deliveryLocation"
                      {...register('deliveryLocation', {
                        required: 'Delivery location is required',
                      })}
                      placeholder="City, State or ZIP"
                      className={errors.deliveryLocation ? 'border-destructive' : ''}
                    />
                    {errors.deliveryLocation && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.deliveryLocation.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Tell us about your shipping needs..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="permission"
                      checked={permissionGranted}
                      onCheckedChange={(checked) =>
                        setValue('permissionGranted', checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="permission"
                      className="text-sm font-normal leading-tight cursor-pointer"
                    >
                      I grant Supreme Trucking Group permission to contact me.{' '}
                      <span className="text-destructive">*</span>
                    </Label>
                  </div>
                  {errors.permissionGranted && (
                    <p className="text-sm text-destructive">
                      {errors.permissionGranted.message}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Quote Request'
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Note: Email functionality is currently disabled. Your submission will be stored
                    for review.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
