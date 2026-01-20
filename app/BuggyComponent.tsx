'use client'

import { myServerAction } from './actions';

export default function BuggyComponent() {
  // ERROR: Calling a Server Action directly during render
  myServerAction(); 
  
  return (
    <div>
      <p>This component will fail to build.</p>
    </div>
  );
}
