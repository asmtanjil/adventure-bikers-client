import React from 'react';

const Blog = () => {
  return (
    <div className='mx-4'>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            <span className='text-xl'>Main 4 differences are below:</span>
          </p>
          <p className='mb-4'>1. <span className='font-semibold'>Local State:</span><br />
            Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.
            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
          </p>
          <p className='mb-4'>2. <span className='font-semibold'>Global (UI) state:</span><br />
            Global state is data we manage across multiple components.
            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
          </p>
          <p className='mb-4'>3. <span className='font-semibold'>Server state :</span><br />
            Data that comes from an external server that must be integrated with our UI state.
            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
            Fortunately there are tools such as SWR and React Query that make managing server state much easier.
          </p>
          <p className='mb-4'>4. <span className='font-semibold'>URL state:</span><br />
            Data that exists on our URLs, including the pathname and query parameters.
            URL state is often missing as a category of state, but it is an important one.
            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
            There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
          </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype.
            Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
          </p>
        </div>
      </div>


      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            <span className='text-xl font-semibold'>Unit Test</span> <br />
            Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
            They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
          </p>

        </div>
      </div>


      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-gray-200 rounded-box my-4">
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content grid grid-cols-1 md:grid-cols-3 gap-8 text-justify">
          <p>
            <span className='text-xl font-semibold'>React</span> <br />
            React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
          </p>
          <p>
            <span className='text-xl font-semibold'>Angular</span> <br />
            Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
          </p>
          <p>
            <span className='text-xl font-semibold'>Vue</span> <br />
            Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
          </p>
        </div>
      </div>


    </div>
  );
};

export default Blog;