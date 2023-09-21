// ENV variables
import { projecturl, apiKey } from '../Config/Config';
import { createClient } from '@supabase/supabase-js';

// supabase
const supabase = createClient(projecturl, apiKey);

export default supabase;
