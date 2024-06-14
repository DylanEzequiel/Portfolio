import React from 'react'

function ButtonDownload(link) {
  return (
    <>
        <a href={link}>
            <div className='bg-comp_third_color active:bg-comp_fourth_color outline outline-4 outline-comp_fourth_color'>
                CV Español
            </div>
        </a>
    </>
  )
}

export default ButtonDownload