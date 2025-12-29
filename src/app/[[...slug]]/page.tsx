'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import { Amplify } from 'aws-amplify';
import config from '../../../amplify_outputs.json';

Amplify.configure(config);

const App = dynamic(() => import('../../App'), { ssr: false })

export default function Page() {
  return <App />
}
