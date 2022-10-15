import React from 'react'
import data from './WrappedData.js'
import { Stack, Box, Heading, Text } from '@chakra-ui/react'

export default function Feature({ title, spent, percent, goal, ...rest }){
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>Spent: ${spent}</Text>
        <Text mt={1}>{percent}% of your spending was on {title}! </Text>
        <Text mt={1}>Your spending goal for {title} this month was {goal}% </Text>
      </Box>
    )
}
