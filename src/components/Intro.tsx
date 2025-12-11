'use client'
import Image from 'next/image'
import TypeIt from 'typeit-react'
import IconLink from './IconLink'
// &lt;/frontend developer&gt;
export default function Intro() {
  const roles = [
    { text: '&lt;frontend developer /&gt;', pause: 1500 },
    { text: '&lt;IoT student /&gt;', pause: 1000 },
    { text: '&lt;problem solver /&gt;', pause: 750 },
    { text: '&lt;lifelong learner /&gt;', pause: 750 },
  ]

  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
      {/* avatar section */}
      <div className="w-48 md:w-64 lg:w-80 md:ml-8 mb-8 md:mb-0">
        <Image src="/my-photo.png" alt="my-photo" width={320} height={320} className="rounded-full" />
      </div>
      {/* intro text section */}
      <div className="max-w-lg flex-1 mx-6 lg:mx-0">
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
          <p className="md:mb-3">Hello there, I&apos;m Ding.</p>
          <p>
            I&apos;m a{' '}
            <span className="text-sky-600">
              <TypeIt
                options={{ loop: true, speed: 75 }}
                getBeforeInit={instance => {
                  roles.forEach(({ text, pause }) => {
                    instance = instance.type(text).pause(pause).delete()
                  })
                  return instance
                }}
              />
            </span>
          </p>
        </div>
        <div>
          <p className="text-gray-500">
            I&apos;m a front-end developer with rich experience creating responsive and user-friendly websites, and a second-year IoT student. Detail-oriented, collaborative, and always eager to
            learn.
          </p>
        </div>
      </div>
    </div>
  )
}
