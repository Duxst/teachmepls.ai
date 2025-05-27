import Image from "next/image";
import Link from 'next/link';
import Button from '@/components/Button';
import Layout from '@/components/Layout';

export default function Home() {
  const features = [
    {
      title: 'Smart Summarization',
      description: 'Transform lengthy lecture notes into concise, easy-to-understand summaries using AI.',
      icon: '📝',
    },
    {
      title: 'Interactive Flashcards',
      description: 'Generate personalized flashcards with spaced repetition for optimal learning.',
      icon: '🎴',
    },
    {
      title: 'AI-Powered Lectures',
      description: 'Listen to your notes with customizable voice and emotional tone.',
      icon: '🎧',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Study Notes into Interactive Learning
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience a new way of learning with AI-powered study tools. Convert your lecture notes into engaging summaries, flashcards, and audio lectures.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" variant="primary">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32 justify-center items-center">
            <Image src="/biocard.png" alt="Bio Card" width={520} height={390} className="rounded-lg object-cover" />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Learn Smarter</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to study effectively
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI-powered tools help you understand and retain information better than ever before.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span className="text-3xl">{feature.icon}</span>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
