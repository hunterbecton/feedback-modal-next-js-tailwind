import { Fragment, useState, FC } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Lottie from 'react-lottie-player';
import { motion } from 'framer-motion';

import checkmarkAnimation from '../../lottie/checkmark.json';
import { Button, ButtonRate, Textarea, Alert } from '../../components';
import { mockAPI } from '../../utils/mockAPI';

const validationSchema = Yup.object().shape({
  rating: Yup.number()
    .nullable()
    .required('Please select a rating from 0 to 5'),
  feedback: Yup.string(),
});

export const FeedbackModal: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  interface FeedbackForm {
    rating: string;
    feedback: string;
    serverError?: string;
  }

  const methods = useForm<FeedbackForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      rating: '',
      feedback: '',
    },
  });

  // This is a mock API call: Replace with real form submission
  const onSubmit = async (data: FeedbackForm) => {
    try {
      // Clear server error
      methods.clearErrors('serverError');

      // View the data in your console
      console.log(data);

      // Randomly return success or fail from mock API
      const randomPassFail = Math.random() > 0.2;

      await mockAPI(randomPassFail, 2000);
    } catch (error) {
      if (error instanceof Error) {
        methods.setError('serverError', { message: error.message });
      }
    }
  };

  // Remove the setTimeouts for production!
  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      methods.reset();
    }, 1000);

    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => handleClose()}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0' />
        </Transition.Child>
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-0 text-center md:p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative flex min-h-screen w-full max-w-none transform flex-col rounded-none bg-neutral-one p-8 shadow-none md:min-h-[28.875rem] md:max-w-xl md:rounded-lg md:shadow-brand'>
                {!methods.formState.isSubmitSuccessful ? (
                  <div>
                    <div className='mb-4 text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-headline-lg font-bold text-brand-ten'
                      >
                        Please rate your experience with Stoneway
                      </Dialog.Title>
                    </div>
                    <FormProvider {...methods}>
                      <form>
                        <div className='mb-8 flex flex-wrap gap-4'>
                          <ButtonRate name='rating' number='1' text='Awful' />
                          <ButtonRate name='rating' number='2' text='Bad' />
                          <ButtonRate name='rating' number='3' text='Okay' />
                          <ButtonRate name='rating' number='4' text='Good' />
                          <ButtonRate name='rating' number='5' text='Great' />
                        </div>
                        <div className='mb-8'>
                          <Textarea
                            name='feedback'
                            label='Tell us more about your reasons for this rating'
                            placeholder='Enter your feedback here...'
                          />
                        </div>
                      </form>
                    </FormProvider>
                    {/* Rating errors */}
                    {'rating' in methods.formState.errors && (
                      <Alert text={methods.formState.errors.rating?.message} />
                    )}
                    {/* Server errors */}
                    {'serverError' in methods.formState.errors && (
                      <Alert
                        text={methods.formState.errors.serverError?.message}
                      />
                    )}
                    <div className='flex justify-end gap-4'>
                      <Button
                        style='light'
                        text='Close'
                        onClick={() => handleClose()}
                        disabled={methods.formState.isSubmitting}
                      />
                      <Button
                        style='dark'
                        text={
                          methods.formState.isSubmitting
                            ? 'Submitting'
                            : 'Submit'
                        }
                        onClick={methods.handleSubmit((data) => onSubmit(data))}
                        disabled={methods.formState.isSubmitting}
                      />
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-1 -translate-y-10 flex-col items-center justify-center'>
                    <div className='h-[9.625rem] w-[9.625rem] translate-y-5'>
                      <Lottie
                        loop={false}
                        animationData={checkmarkAnimation}
                        play={true}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: 'easeOut', duration: 1, delay: 2 }}
                    >
                      <p className='mb-6 text-headline-base font-bold text-brand-ten'>
                        Thank you for your feedback!
                      </p>
                      <Button
                        style='dark'
                        text='Close'
                        onClick={() => handleClose()}
                      />
                    </motion.div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
