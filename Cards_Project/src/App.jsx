import React from 'react'
import Cards from './components/cards'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "Pune"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 48,
      location: "Mumbai"
    },
    {
      brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 65,
      location: "Pan India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Mumbai"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihLi_9AxPD6QsExYVSDX10Zk1IXnGnWe3pQ&s",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Pan India"
    },
    {
      brandLogo: "https://thumbs.dreamstime.com/b/microsoft-logo-four-color-squares-building-facade-microsoft-corporation-headquartered-redmond-washington-mountain-216742481.jpg",
      companyName: "Microsoft",
      datePosted: "5 weeks ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 52,
      location: "Pune"
    },
    {
      brandLogo: "https://img.freepik.com/premium-photo/3d-render-uber-logo-glossy-translucent-black-floating-sleek-45-degree-angle-neon-white-out_1020495-781520.jpg?semt=ais_user_personalization&w=740&q=80",
      companyName: "Uber",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Mumbai"
    },
    {
      brandLogo: "https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg",
      companyName: "Airbnb",
      datePosted: "2 months ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Pan India"
    },
    {
      brandLogo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Symbol.png",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 60,
      location: "Pune"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2017/08/Salesforce-logo.jpg",
      companyName: "Salesforce",
      datePosted: "6 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 58,
      location: "Dhule"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key ={idx}>
          <Cards logo={elem.brandLogo} company={elem.companyName} datePosted={elem.datePosted} post={elem.post}
            pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App