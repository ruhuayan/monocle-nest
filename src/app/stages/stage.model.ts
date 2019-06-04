export interface Stage {
    site: string;
    stage: number;
    status: string;
    fixVersion: string;
    fixVersionKey: string;
    qa: string;
    dev: string;
    notes: string;
    distinguishName: string;
    priotiry: string;
    isHotfix: boolean;
    needsQa: boolean;

}