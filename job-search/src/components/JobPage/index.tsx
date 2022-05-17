import { Job } from '../Search';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../services/job';
import './Job.css';
import JobAside from './JobAside';
import JobContent from './JobContent';

export default function JobPage() {
  const { jobId } = useParams();
  const job = getJobById(jobId as string);

  return (
    <section className='job-page'>
      <JobAside content={job?.how_to_apply as string} />
      <JobContent job={job as Job} />
    </section>
  );
}
