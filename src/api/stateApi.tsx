import { supabase } from "@/lib/supabase";

export interface getRefStateProps {
  user_id: string;
  ref_id: string;
}

export interface getRefStateNumProps {
  user_id: string;
  state: string;
}

export interface postRefStateProps {
  roadmap_type: string; // front, back, ai
  user_id: string;
  rid: string;
  state: string;
  state_id: number;
}

export const getRefState = async (props: getRefStateProps) => {
  const data = await supabase
    .from("ref_state_test")
    .select("state")
    .eq("user_id", props.user_id)
    .eq("rid", props.ref_id);

  return data;
};

export const getRefStateNum = async (props: getRefStateNumProps) => {
  const { user_id, state } = props;
  const data = await supabase
    .from("ref_state_test")
    .select("state_id")
    .eq("user_id", user_id)
    .eq("state", state)
    .order("state_id", { ascending: false })
    .limit(1);

  return data;
};

export const postRefState = async (props: postRefStateProps) => {
  await supabase
    .from("ref_state_test")
    .upsert([
      {
        user_id: props.user_id,
        rid: props.rid,
        state: props.state,
        state_id: props.state_id,
      },
    ])
    .eq("user_id", props.user_id)
    .eq("rid", props.rid);
};

export interface getNodeStateProps {
  roadmap_type: string; // front, back, ai
  depth: number;
  user_id?: string;
}

export interface postNodeStateProps {
  state: string;
  node_id: string;
  user_id: string;
}

export const getNodeState = async (props: getNodeStateProps) => {
  const data = await supabase
    .from("node_state")
    .select("nid, state, node!inner(depth, type)")
    .eq("node.depth", props.depth)
    .eq("user_id", props.user_id || "0");

  return data;
};

export const upsertNodeState = async (props: postNodeStateProps) => {
  const { data } = await supabase
    .from("node_state")
    .upsert([
      {
        user_id: props.user_id,
        state: props.state,
        nid: props.node_id,
      },
    ])
    .eq("user_id", props.user_id)
    .eq("nid", props.node_id);

  return data;
};
