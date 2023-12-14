// src/components/BlogCard.js
import React from 'react';
import { Card, Image, Text } from "@mantine/core";

const BlogCard = ({ title, content, date, imageUrl }) => {
  return (
    // <div className="bg-white shadow-md rounded-md p-4 m-4">
    //   <img src={imageUrl} alt={title} className="mb-4 rounded-md w-full h-40 object-cover" />
    //   <h2 className="text-xl font-bold mb-2">{title}</h2>
    //   <p className="text-gray-600 mb-2">{content}</p>
    //   <p className="text-gray-400">{date}</p>
    // </div>

    <div className="">
             <Card
              shadow="sm"
              padding="xl"
              component="a"
              href=""
              target="_blank"
            >
              <Card.Section>
                <img src={imageUrl} alt={title} className="mb-4 rounded-md w-full h-40 object-cover" />
   
                  
              </Card.Section>

              <Text fw={500} size="lg" mt="md">
                {title}
              </Text>
               <Text mt="xs" c="dimmed" size="sm">
                 {content}
               </Text>
            </Card>
          </div>
  );

};

export default BlogCard;
