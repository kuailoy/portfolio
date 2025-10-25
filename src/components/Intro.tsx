import Image from 'next/image'

export default function Intro() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="max-w-lg">
        <div className="text-3xl font-semibold mb-6">
          <p className="mb-3">Hello there, I&apos;m Ding.</p>
          <p>
            I&apos;m a <span className="text-sky-600">&lt;/frontend developer&gt;</span>
          </p>
        </div>
        <div>
          <p className="text-gray-500">
            I&apos;m a front-end developer with rich experience creating responsive and user-friendly websites, and a second-year IoT student. Detail-oriented, collaborative, and always eager to learn.
          </p>
        </div>
      </div>

      <div>
        <Image src="/my-photo.png" alt="my-photo" width={320} height={320} className="rounded-full" />
      </div>
    </div>
  )
}
