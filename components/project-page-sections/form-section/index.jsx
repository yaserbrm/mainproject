import CommentBox from '@/components/common/comment-box'
import FormBox from '@/components/common/form-section'
import SectionTitle from '@/components/common/section-title'
import React from 'react'

function FormSection() {
  return (
    <section className="w-full">
        <div className="serviceCont mb-[5%]">
            <SectionTitle lineClasses="bg-cRed" textClasses="text-c25" title="  نظرات شما کاربران "  />

        </div>
        <div className="container">
            <div className="bg-cf4  p-4 lg:py-7 lg:px-10  my-10">
            <FormBox />
            </div>
            <CommentBox />
        </div>
    </section>

  )
}

export default FormSection