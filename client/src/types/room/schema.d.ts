export type SubsSchema = {
    type: 'client_id' | 'update' | 'signal' | 'signal_error';
    identifier?: unknown;
    data: string;
    descriptor?: unknown;
};
