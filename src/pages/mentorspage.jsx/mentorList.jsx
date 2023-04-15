import React from 'react'
import useFetch from '../../hooks/useFetch';
import MentorCard from '../../components/mentorship/mentorCard';
import EveMentors from './eveMentors';

function MentorList() {
    const {data, loading, error} = useFetch("https://randomuser.me/api/?results=8");

    if (loading) console.log(loading);
    if (error) console.log(error);
    console.log(data)
    const mentor = data;
  return (
    <div className='w-full flex flex-col gap-8 justify-center items-center py-12 md:py-24 px-6 md:px-12 home-workshop'>
        {
            mentor.map((item) => (
                <div key={item.id} className='eve-mentor w-full md:w-1/2'>
                    <EveMentors mentor={item} />
                </div>
            ))
        }
    </div>
  )
}

export default MentorList