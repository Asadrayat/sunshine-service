import React from 'react';

const Blog = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="p-20 text-center">
                <div className="">
                    <h1 className="text-2xl font-bold">Q : Difference between SQL and NoSQL?</h1>
                    <p className="py-6">Ans : SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.

                    </p>
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold">Q : What is the difference between javascript and NodeJS?</h1>
                    <p className="py-6">Ans : JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language .

                    </p>
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold">Q : Difference between SQL and NoSQL?</h1>
                    <p className="py-6">Ans : SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                        A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.

                    </p>
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold">Q : How does NodeJS handle multiple requests at the same time?</h1>
                    <p className="py-6">Ans : NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;