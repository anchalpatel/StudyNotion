import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {RxDropdownMenu} from "react-icons/rx"
import {MdModeEdit} from "react-icons/md"
import {RiDeleteBinLine} from "react-icons/ri"
import {FaSortDown} from "react-icons/fa"
import {IoAdd} from "react-icons/io5"
import SubSectionModal from './SubSectionModal';
import Modal from '../../../../Common/Modal';
import { toast } from 'react-hot-toast';
import { setCourse } from '../../../../../Reducer/Slices/courseSlice';
import { deleteSection, deleteSubSection } from '../../../../../Services/Operations/CourseAPI';

function NestedView({handleChangeEdit}) {
    const {token} = useSelector((state) => state.auth);
    const {course} = useSelector( (state) => state.course);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        console.log("Rerebdered");
    })
   
    const [addSubSection, setAdSubdSection] = useState(null);
    const [editSubSection, setEditSubSection] = useState(null);
    const [viewSubSection, setViewSubSection] = useState(null);
    const [confirmationModal,setConfirmationModal] = useState(null);

    async function deleteSectionHandler(sectionId, courseId) {
        setLoading(true);
        try {
          // 1. Make the API call to delete the section
          const result = await deleteSection({ sectionId, courseId }, token);
          console.log("Section deleted successfully!");
      
          // 2. Locally update the course content by removing the deleted section
          const updatedCourseContent = course.courceContent.filter(
            (section) => section._id !== sectionId
          );
      
          // 3. Create the updated course structure
          const updatedCourse = {
            ...course,
            courceContent: updatedCourseContent,
          };
      
          // 4. Dispatch the updated course state to Redux
          dispatch(setCourse(updatedCourse));
          toast.success("Section deleted successfully");
        } catch (error) {
          console.error("Error deleting section:", error);
          toast.error("Could not delete section");
        } finally {
          setLoading(false);
          setConfirmationModal(null);
        }
      }
      

    async function deleteSubSectionHandler(subSectionId, sectionId) {
        setLoading(true);
        try {
          const courseId = course._id;
      
          // 1. Make the API call to delete the subsection
          await deleteSubSection({ subSectionId, sectionId, courseId }, token);
      
          console.log("Subsection deleted successfully!");
      
          // 2. Locally update the course content by removing the deleted subsection
          const updatedCourseContent = course.courceContent.map((section) => {
            if (section._id === sectionId) {
              // Filter out the deleted subsection by its ID
              const updatedSubSections = section.subSections.filter(
                (subSec) => subSec._id !== subSectionId
              );
              return {
                ...section,
                subSections: updatedSubSections,
              };
            }
            return section;
          });
      
          // 3. Create the updated course structure
          const updatedCourse = {
            ...course,
            courceContent: updatedCourseContent,
          };
      
          // 4. Dispatch the updated course state to Redux
          dispatch(setCourse(updatedCourse));
          toast.success("Lecture deleted successfully");
        } catch (error) {
          console.error("Error deleting subsection:", error);
          toast.error("Could not delete subsection");
        } finally {
          setLoading(false);
          setConfirmationModal(null);
        }
      }
      

  return (
    <div className='flex flex-col w-full mt-4 px-5 py-2 bg-richblack-700 rounded-md'>
   
        <div className='flex flex-col gap-2 justify-center items-center w-[100%]'>
            {
                course.courceContent.map((section) => (
                    <details key={section._id} className='w-[100%]'>
                        <summary className='flex justify-between items-center border-b-[1px] border-b-richblack-400 bg-richblack-700 text-richblack-200 w-[100%] px-4 py-1'>
                            <div className='flex gap-3 justify-center items-center'>
                                <RxDropdownMenu className='scale-150' />
                                <p className='text-richblack-5 text-[14px]'>{section.title}</p>
                            </div>
                            <div className='flex gap-1 text-richblack-200'>
                                <button onClick={() => {handleChangeEdit(section._id, section.title)}}><MdModeEdit></MdModeEdit></button>
                                <button onClick={()=>{
                                    setConfirmationModal({
                                        text1 : "Are you sure",
                                        text2 : "Your section will be deleted",
                                        button1Text: "Delete",
                                        button2Text: "Cancel",
                                        button1Handler: () => {deleteSectionHandler(section._id, course._id)},
                                        button2Handler: () => {setConfirmationModal(null)}
                                    })
                                }}><RiDeleteBinLine></RiDeleteBinLine></button>
                                <p>|</p>
                                <FaSortDown></FaSortDown>
                            </div>
                        </summary>

                        <div className='flex flex-col w-[100%] items-start gap-2 px-7 py-2 '>
                            {
                                section.subSections.map( (subsection) => {
                                
                                    return(<div key={subsection._id} onClick={()=>{setViewSubSection(subsection)}} className='px-4 border-b-[1px] border-b-richblack-400 py-1 w-[100%] text-[14px] flex justify-between items-center'>
                                  
                                        <div className='flex gap-1 justify-center items-center'>
                                            <RxDropdownMenu className='scale-150 text-richblack-200'></RxDropdownMenu>
                                            <p className='text-richblack-5'>{subsection.title}</p>
                                            
                                        </div>

                                        <div onClick={(e)=>(e.stopPropagation())} className='flex gap-1 justify-center items-center text-richblack-200'>
                                            <button onClick={()=>{setEditSubSection({...subsection, sectionId:section._id})}}><MdModeEdit></MdModeEdit></button>
                                            <button onClick={()=>{
                                                setConfirmationModal({
                                                    text1 : "Are you sure",
                                                    text2 : "Your lecture will be deleted",
                                                    button1Text: "Delete",
                                                    button2Text: "Cancel",
                                                    button1Handler: () =>{deleteSubSectionHandler(subsection._id, section._id)},
                                                    button2Handler: () => {setConfirmationModal(null)}
                                                })
                                            }}><RiDeleteBinLine></RiDeleteBinLine></button>
                                            
                                        </div>
                                    </div>)
                                })
                            }
                            <button onClick={()=>{setAdSubdSection(section)}} className='flex gap-1 font-[600] text-[14px] justify-center items-center text-yellow-200'><IoAdd></IoAdd><span>Add lecture</span></button>
                        </div>
                        
                    </details>
                ))
            }
        </div>

        {
            addSubSection ? (<SubSectionModal modalData={addSubSection} setModal={setAdSubdSection} add={true} view={false} edit={false}></SubSectionModal>) : 
            viewSubSection ? (<SubSectionModal modalData={viewSubSection} setModal={setViewSubSection} add={false} view={true} edit={false}></SubSectionModal>) : 
            editSubSection ? (<SubSectionModal modalData={editSubSection} setModal={setEditSubSection} add={false} view={false} edit={true}></SubSectionModal>) : 
            (<div></div>)
        }
        {
            confirmationModal ? (<Modal modalData={confirmationModal}></Modal>) : (<div></div>)
        }
       
    </div>
  )
}

export default NestedView