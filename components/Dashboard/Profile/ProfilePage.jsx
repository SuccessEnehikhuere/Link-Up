import React from 'react'
import Image from 'next/image'
import ImgUploader from './ImgUploader'
import ProfileDetails from './ProfileDetails'

const ProfilePage = () => {
 
	return (
    <form className="col-span-7 lg:col-span-4 bg-primary-white rounded-md p-4 md:p-6  overflow-auto">
      <div>
        <h2 className="text-dark-grey font-bold text-2xl mb-2">
          Profile Details
        </h2>
        <p className="text-primary-color-light  mb-6">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <article className="flex flex-col md:flex-row items-center justify-between text-primary-color-light  bg-primary-bg p-6 gap-8">
        <p className="w-auto">Profile Picture</p>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className=" h-[150px] w-[150px] flex flex-col relative rounded-lg justify-center items-center">
            <div className="absolute w-full  top-0 h-[150px] left-0">
              <Image
                // src={user?.image}
                layout="fill"
                alt="profile-picture"
                className="rounded-lg"
              />
            </div>
            <ImgUploader
            // setImageFormData={setImageFormData}
            // setFile={setFile}
            // file={file}
            // user={user}
            />
          </div>
          <p className="text-xs w-full">
            Image must be below 1024x1024px. <br /> Use PNG or JPG format.
          </p>
        </div>
      </article>
      <article>
        <ProfileDetails
        // register={register}
        // updateUserLoading={updateUserLoading}
        // email={session?.user.email}
        />
      </article>
      <hr />
      <section className="flex justify-end pt-4 w-full">
        <button
          // disabled={updateUserLoading || !activateSave}
          type="submit"
          className="bg-primary-btn-color w-full md:w-[100px] text-white px-6 py-2 rounded-md flex justify-center items-center"
        >
          save
          {/* {updateUserLoading || imageUploading ? <SaveSpinner /> : 'Save'} */}
        </button>
      </section>
    </form>
  )
}

export default ProfilePage