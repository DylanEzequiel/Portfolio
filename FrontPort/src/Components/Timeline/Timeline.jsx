import {
    Button,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
  } from "flowbite-react";
  import { HiArrowNarrowRight } from "react-icons/hi";
  import { FaFolderTree } from "react-icons/fa6";
  import { FaRegFolderOpen } from "react-icons/fa";
  
  export default function ComponentTimeline() {
    return (
        <article className="border-[#cccccc94] my-10 border-t-2">
            <h3 className="py-10 font-semibold text-2xl text-white"><FaFolderTree className="inline"></FaFolderTree> Experience</h3>
            <Timeline>
                <TimelineItem>
                <TimelinePoint icon={FaRegFolderOpen} style={{"border":"none", "backgroundColor":"red",}} /> 
                <TimelineContent>
                    <TimelineTime>February 2022</TimelineTime>
                    <TimelineTitle className="text-white">Application UI code in Tailwind CSS</TimelineTitle>
                    <TimelineBody>
                    Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                    E-commerce & Marketing pages.
                    </TimelineBody>
                    <Button color="gray">
                    Learn More
                    <HiArrowNarrowRight className="ml-2 w-3 h-3" />
                    </Button>
                </TimelineContent>
                </TimelineItem>
               
            </Timeline>
        </article>
    );
  }