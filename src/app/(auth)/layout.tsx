// import { tryGetUserId } from '@/utils';
// import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function AuthLayout(props: PropsWithChildren) {
  // Remove these and allow the component to redirect a signed in user to the home page
  // The updated Middleware will then handle redirecting a signed in user to /product-modals
  // const userId = await tryGetUserId()
  // if (userId) {
  //   redirect('/product-models');
  // }

  return (
    <div className="light relative grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div>
        <div className="hidden text-center text-2xl font-bold md:text-4xl lg:block lg:text-7xl">
          Ace Copilot
        </div>
        <div className="mt-8 hidden text-center text-base font-normal md:text-lg lg:block">
          Accelerate innovation with reliable, AI-powered product modeling
        </div>
      </div>
      <div className="absolute top-1/2 col-span-1 container flex -translate-y-1/2 items-center justify-center lg:static lg:top-0 lg:col-span-1 lg:flex lg:translate-y-0">
        {props.children}
      </div>
    </div>
  );
}
