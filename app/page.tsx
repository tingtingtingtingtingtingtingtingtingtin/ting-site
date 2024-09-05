import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        tingtingtingtingting
      </h1>
      <p className="mb-4">
        {`Hi there, I'm Ting!
        I'm an undergraduate Computer Science student at UC Riverside with a passion for creating.
        With hands-on experience in web and gave development, I enjoy creating user-friendly and visually appealing experiences. I’ve also had the opportunity to lead and collaborate on various projects, which has strengthened my problem-solving skills and attention to detail. 
        Outside of programming, I have a deep appreciation for art, design, and music, which often influences my approach to creating digital experiences. I'm always eager to learn, adapt, and take on new challenges in the tech world.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
