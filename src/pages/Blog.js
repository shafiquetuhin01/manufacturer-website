import React from "react";

const Blog = () => {
  return (
    <div>
        <h2 className="text-primary text-4xl font-bold text-center my-5 underline">This is my blog page</h2>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions block">
            <h2 className="text-primary font-bold mb-3 text-justify text-2xl block">
              How will you improve the performance of a React Application?
            </h2>
            <h2 className="text-2xl block">
              <span className="text-primary font-bold"> Ans:</span> Internally,
              React uses several clever techniques to minimize the number of
              costly DOM operations required to update the UI. For many
              applications, using React will lead to a fast user interface
              without doing much work to specifically optimize for performance.
              Nevertheless, there are several ways you can speed up your React
              application.
            </h2>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions block">
            <h2 className="text-primary font-bold mb-3 text-justify text-2xl block">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <h2 className="text-2xl block">
              <span className="text-primary font-bold"> Ans:</span> In order to
              implement state in our components, React provides us with a hook
              called useState. Let's see how it works with the following
              example. We'll use the classic counter example, in which we're
              displaying a number and we have several buttons to increase,
              decrease, or reset that number. This is a good example of an app
              where we need to store a piece of information and render something
              different every time that information changes.
            </h2>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions block">
            <h2 className="text-primary font-bold mb-3 text-justify text-2xl block">
              How does prototypical inheritance work?
            </h2>
            <h2 className="text-2xl block">
              <span className="text-primary font-bold"> Ans:</span> JavaScript
              is a prototype-based, Object Oriented programming language. After
              the ES6 updates, JavaScript allowed for “prototypal inheritance”,
              meaning that objects and methods can be shared, extended, and
              copied. Sharing amid objects makes for easy inheritance of
              structure (data fields), behavior (functions / methods), and state
              (data values). JavaScript is the most common of the
              prototype-capable languages, and its capabilities are relatively
              unique. When used appropriately, prototypical inheritance in
              JavaScript is a powerful tool that can save hours of coding.
              Today, we want to get you acquainted with prototypal inheritance
              in JavaScript to get you up to date with the ES6 capabilities.
            </h2>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions block">
            <h2 className="text-primary font-bold mb-3 text-justify text-2xl block">
            Why you do not set the state directly in React?. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.
            </h2>
            <h2 className="text-2xl block">
              <span className="text-primary font-bold"> Ans:</span> It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
            </h2>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions block">
            <h2 className="text-primary font-bold mb-3 text-justify text-2xl block">
            You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
            </h2>
            <h2 className="text-2xl block">
              <span className="text-primary font-bold"> Ans:</span> In this section, we’ll create a search bar using Search.io React Search UI components. For tutorial purposes, we’ll use the Best Buy sample data set provided by Search.io React SDK. This sample data is accessed using the key provided in the Search.io Docs. The applications made with these keys can only fetch data from localhost so you shouldn’t be able to deploy these applications.
            </h2>
          </div>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-actions block">
            <h2 className="text-primary font-bold mb-3 text-justify text-2xl block">
            What is a unit test? Why should write unit tests?
            </h2>
            <h2 className="text-2xl block">
              <span className="text-primary font-bold"> Ans:</span> Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component. Moreover, any error in code can be identified at the beginning itself, saving time to rectify it at later stages.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
